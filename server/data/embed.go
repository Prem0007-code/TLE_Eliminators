package data

import _ "embed"

//go:embed current.json
var CurrentJSON []byte

//go:embed past.json
var PastJSON []byte

//go:embed courses.json
var CoursesJSON []byte
