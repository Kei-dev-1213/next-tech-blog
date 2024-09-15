# Next-Tech-Blog

## Introduction

This project is a blog site developed using Next.js, showcasing articles from the Qiita API and MicroCMS API. It demonstrates the power of Next.js for building modern web applications.

## Features

### Overview
A site that displays articles from Qiita API and blog content from MicroCMS API.

GitHub Repository: [https://github.com/Kei-dev-1213/next-tech-blog](https://github.com/Kei-dev-1213/next-tech-blog)

### Tech Stack
```
- Environment
Next.js: v14.2.11
vercel: 37.4.2

- Language
typescript: 5.6.2

- Libraries
react: 18.2.0
react-dom: 18.2.0

- CSS
tailwindcss: 3.4.10
daisyui: 4.12.10

- Testing
testing-library/jest-dom: 6.1.5
testing-library/react: 14.1.2
types/jest: 29.5.11
```

### Main Features

#### Home Page
- Displays 4 recent articles each from Qiita and MicroCMS
- Features "View More" buttons for both sections

#### Qiita Articles Page
- Accessed via "View More" under "Posts On Qiita" on the home page
- Displays all retrieved Qiita articles
- Clicking an article card opens the corresponding Qiita page in a new tab

#### Blog Articles Page
- Accessed via "View More" under "Posts On Blog" on the home page
- Shows all blog posts from MicroCMS
- Clicking a blog post card navigates to the detailed blog post page

#### Blog Post Detail Page
- Displays the full content of a selected blog post

## How to Use

1. **Home Page**: Browse recent articles from Qiita and the blog.
2. **Qiita Articles**: Click "View More" under "Posts On Qiita" to see all Qiita articles.
3. **Blog Posts**: Click "View More" under "Posts On Blog" to view all blog posts.
4. **Article Details**: Click on any article card to read the full content.

## Development Insights

- **Next.js Folder Structure**: Organizing the app directory was challenging but crucial for maintainability.
- **Server vs Client Components**: Balancing between server and client components was key to optimizing performance and interactivity.
- **Error Resolution**: Development speed improved significantly due to enhanced problem-solving skills and familiarity with common issues.

## Conclusion

This project demonstrates the capabilities of Next.js in creating efficient and responsive web applications. It serves as a foundation for future, more complex projects and continuous learning in modern web development.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).