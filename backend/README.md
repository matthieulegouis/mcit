# Backend for Social poster generator

This backend is a simple REST API with a few methods:

- `POST /image`: Upload an image from frontend and get the social URL to share with meta-tags associated. Images are stored in `./uploads` directory.
- `POST /pdf`: Generate PDF document using canvas sent in request's body ({imgData}) and get the new PDF URL for downloading. PDF documents are stored in `./pdf` directory.

A CRON task cleans directories everyday at 02:00 am.

It serves frontend files and uploads directories:

- `/`: Frontend
- `/pdf/*`: Uploaded PDF documents
- `/images/*`: Uploaded social images
- `/social/*`: Uploaded social images with open-graph meta-tags for sharing
