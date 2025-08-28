package main

import (
	"encoding/json"
	"log"
	"net/http"

	"tle-eliminators-server/data"
)

type Socials struct {
	LinkedIn string `json:"linkedin"`
	Twitter  string `json:"twitter,omitempty"`
	LeetCode string `json:"leetcode,omitempty"`
}

type Mentor struct {
	Name        string  `json:"name"`
	Title       string  `json:"title"`
	ImageURL    string  `json:"imageUrl"`
	Description string  `json:"description"`
	Socials     Socials `json:"socials"`
}

// Course represents a self-paced course shown in the promo banner CTA
type Course struct {
    ID          string `json:"id"`
    Title       string `json:"title"`
    Level       int    `json:"level"`
    Price       int    `json:"price"`
    Currency    string `json:"currency"`
    Description string `json:"description"`
    URL         string `json:"url"`
}

func main() {
	mux := http.NewServeMux()

	// Parse embedded JSON once at startup
	var mentors []Mentor
	var current []Mentor
	var past []Mentor
	var courses []Course
	if err := json.Unmarshal(data.MentorsJSON, &mentors); err != nil {
		log.Printf("warn: failed to parse mentors.json (fallback to current+past): %v", err)
	}
	if err := json.Unmarshal(data.CurrentJSON, &current); err != nil {
		log.Fatalf("failed to parse current mentors: %v", err)
	}
	if err := json.Unmarshal(data.PastJSON, &past); err != nil {
		log.Fatalf("failed to parse past mentors: %v", err)
	}
	if err := json.Unmarshal(data.CoursesJSON, &courses); err != nil {
		log.Fatalf("failed to parse courses: %v", err)
	}

	mux.HandleFunc("/api/mentors/current", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(current)
	})

	mux.HandleFunc("/api/mentors/past", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(past)
	})

	// Unified mentors endpoint
	mux.HandleFunc("/api/mentors", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		if len(mentors) > 0 {
			json.NewEncoder(w).Encode(mentors)
			return
		}
		// fallback: combine current + past
		combined := append([]Mentor{}, current...)
		combined = append(combined, past...)
		json.NewEncoder(w).Encode(combined)
	})

	// Courses endpoint
	mux.HandleFunc("/api/courses", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(courses)
	})

	log.Println("Go API running on :8080")
	log.Fatal(http.ListenAndServe(":8080", mux))
}

