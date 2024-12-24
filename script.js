   // Select elements
   const overviewTab = document.getElementById('overviewTab');
   const reviewsTab = document.getElementById('reviewsTab');
   const overviewContent = document.getElementById('overviewContent');
   const reviewsContent = document.getElementById('reviewsContent');

   // Add event listeners for tab buttons
   overviewTab.addEventListener('click', () => {
     // Show Overview content
     overviewContent.classList.remove('hidden');
     reviewsContent.classList.add('hidden');
     
     // Update tab styles
     overviewTab.classList.add('text-purple-600', 'border-purple-600');
     overviewTab.classList.remove('text-gray-600', 'border-transparent');
     reviewsTab.classList.add('text-gray-600', 'border-transparent');
     reviewsTab.classList.remove('text-purple-600', 'border-purple-600');
   });

   reviewsTab.addEventListener('click', () => {
     // Show Reviews content
     reviewsContent.classList.remove('hidden');
     overviewContent.classList.add('hidden');
     
     // Update tab styles
     reviewsTab.classList.add('text-purple-600', 'border-purple-600');
     reviewsTab.classList.remove('text-gray-600', 'border-transparent');
     overviewTab.classList.add('text-gray-600', 'border-transparent');
     overviewTab.classList.remove('text-purple-600', 'border-purple-600');
   });