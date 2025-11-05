// File Upload functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find all file upload areas
    const uploadAreas = document.querySelectorAll('.file-upload-area');

    uploadAreas.forEach((uploadArea, index) => {
        // Get elements
        let fileInput = uploadArea.querySelector('input[type="file"]');
        const uploadText = uploadArea.querySelector('p');
        const uploadIcon = uploadArea.querySelector('img');

        // Create file input if it doesn't exist
        if (!fileInput) {
            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.id = `file-upload-${index}`;
            fileInput.name = `file-upload-${index}`;
            fileInput.accept = 'image/*,.pdf';
            fileInput.className = 'hidden';
            uploadArea.appendChild(fileInput);
        }

        // Create image preview element
        const previewImage = document.createElement('img');
        previewImage.className = 'hidden w-full h-full object-cover rounded-3xl absolute top-0 left-0';
        uploadArea.style.position = 'relative';
        uploadArea.appendChild(previewImage);

        // Click event to trigger file input
        uploadArea.addEventListener('click', function(e) {
            if (e.target === uploadArea || e.target === uploadIcon || e.target === uploadText || e.target === previewImage) {
                e.preventDefault();
                e.stopPropagation();
                fileInput.click();
            }
        });

        // Handle file selection
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    // Show image preview
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        previewImage.src = e.target.result;
                        previewImage.classList.remove('hidden');
                        uploadIcon.classList.add('hidden');
                        uploadText.classList.add('hidden');

                        // Remove background color when showing image
                        uploadArea.classList.remove('bg-gray-200', 'bg-gray-300', 'bg-light-gray');
                    };
                    reader.readAsDataURL(file);
                } else {
                    // For non-image files (like PDF)
                    uploadText.textContent = `Selected: ${file.name}`;
                    uploadText.classList.remove('hidden');
                    previewImage.classList.add('hidden');
                    uploadIcon.classList.remove('hidden');
                    uploadArea.classList.add('bg-gray-200');
                    uploadArea.classList.remove('bg-light-gray');
                }
            } else {
                // Reset to default state
                resetUploadArea();
            }
        });

        // Reset function
        function resetUploadArea() {
            uploadText.textContent = 'Drop or click to upload files';
            uploadText.classList.remove('hidden');
            uploadIcon.classList.remove('hidden');
            previewImage.classList.add('hidden');
            previewImage.src = '';
            uploadArea.classList.remove('bg-gray-200', 'bg-gray-300');
            uploadArea.classList.add('bg-light-gray');
        }

        // Drag and drop functionality
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!previewImage.src) {
                uploadArea.classList.add('bg-gray-300');
            }
        });

        uploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!previewImage.src) {
                uploadArea.classList.remove('bg-gray-300');
            }
        });

        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                // Only accept first file
                const dt = new DataTransfer();
                dt.items.add(files[0]);
                fileInput.files = dt.files;

                // Trigger change event
                const changeEvent = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(changeEvent);
            }

            uploadArea.classList.remove('bg-gray-300');
        });
    });

    // Prevent default drag behaviors on document
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
});
