package data

import _ "embed"

//go:embed mentors.json
var MentorsJSON []byte

//go:embed current.json
var CurrentJSON []byte

//go:embed past.json
var PastJSON []byte

//go:embed courses.json
var CoursesJSON []byte
