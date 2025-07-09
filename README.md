# Movie App

A React-based movie application that allows users to browse popular movies, search for specific titles, and manage their favorite movies.

## Features

- Browse popular movies from TMDB API
- Search for movies by title
- Add/remove movies from favorites
- Responsive design
- Navigation between Home and Favorites pages

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

   Get your API key from: https://www.themoviedb.org/settings/api

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Environment Variables
Make sure to set the following environment variable in your deployment platform:
- `VITE_TMDB_API_KEY`: Your TMDB API key

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub (make sure `.env` is in `.gitignore`)
2. Connect your repository to Vercel
3. Add `VITE_TMDB_API_KEY` as an environment variable in Vercel dashboard
4. Deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add `VITE_TMDB_API_KEY` as an environment variable in Netlify dashboard

## Technologies Used

- React 19
- Vite
- React Router DOM
- TMDB API
- CSS3
