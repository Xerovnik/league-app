<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-indigo-600 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold">My Vue 3 Site</h1>
          <nav>
            <ul class="flex space-x-4">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">About</a></li>
              <li><a href="#" class="hover:underline">Services</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <!-- Main Content Area -->
      <div class="flex-1 container mx-auto p-6 flex">
        <!-- Sidebar -->
        <aside class="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Sidebar</h2>
          <ul class="space-y-2">
            <li><a href="#" class="block text-blue-600 hover:text-blue-800">Link 1</a></li>
            <li><a href="#" class="block text-blue-600 hover:text-blue-800">Link 2</a></li>
            <li><a href="#" class="block text-blue-600 hover:text-blue-800">Link 3</a></li>
            <li><a href="#" class="block text-blue-600 hover:text-blue-800">Link 4</a></li>
            <li><a href="#" class="block text-blue-600 hover:text-blue-800">Link 5</a></li>
          </ul>
        </aside>
  
        <!-- Main Content Section -->
        <main class="flex-1 bg-white p-6 ml-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold mb-4">Welcome to the Home Page</h2>
          <p class="text-lg text-gray-700 mb-4">
            This is the main content area. You can add paragraphs, images, or any other components here.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Tailwind CSS is a utility-first CSS framework that allows you to style components easily using predefined classes. 
            This layout uses a two-column approach with a sidebar and main content area.
          </p>
          <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </main>
      </div>
  
      <!-- Footer -->
      <footer class="bg-indigo-600 text-white p-4 mt-auto">
        <div class="container mx-auto text-center">
          © 2024 My Vue 3 Site - All Rights Reserved
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  /* Scoped styles for this component */
  </style>
  