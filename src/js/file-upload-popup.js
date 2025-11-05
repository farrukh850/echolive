// File Upload Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.querySelector('.file-upload-area-popup');
    const uploadedImagesContainer = document.querySelector('.uploaded-images');
    const fileInput = uploadArea.querySelector('input[type="file"]');
    const uploadIcon = uploadArea.querySelector('img[alt="Photo Icon"]');
    const uploadText = uploadArea.querySelector('.file-upload-text');

    // Click event to trigger file input
    uploadArea.addEventListener('click', function(e) {
        if (e.target === uploadArea || e.target === uploadIcon || e.target === uploadText) {
            fileInput.click();
        }
    });

    // Handle file selection
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('bg-gray-200');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('bg-gray-200');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('bg-gray-200');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    });

    // Function to handle files
    function handleFiles(files) {
        // Convert uploadedImagesContainer to grid layout if not already
        uploadedImagesContainer.className = 'uploaded-images grid grid-cols-2 lg:grid-cols-3 gap-4';

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/') || file.type === 'application/pdf') {
                // Create preview container - removed margin bottom as grid handles spacing
                const previewContainer = document.createElement('div');
                previewContainer.className = 'relative h-40 bg-light-gray rounded-3xl overflow-hidden';

                // Create preview content based on file type
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'w-full h-full object-cover';
                        previewContainer.appendChild(img);
                        addPreviewDetails();
                    };
                    reader.readAsDataURL(file);
                } else {
                    // For PDF files
                    const pdfIcon = document.createElement('div');
                    pdfIcon.className = 'w-full h-full flex items-center justify-center';
                    pdfIcon.innerHTML = '<img src="/images/pdf.svg" alt="PDF" class="w-16 h-16">';
                    previewContainer.appendChild(pdfIcon);
                    addPreviewDetails();
                }

                function addPreviewDetails() {

                    // Add remove button
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'absolute top-1/2 left-1/2 bg-light-gray/30 rounded-md -translate-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md';
                    removeBtn.innerHTML = '<img src="/images/delete-white.svg" alt="Remove" class="w-5 h-5">';
                    removeBtn.onclick = function(e) {
                        e.preventDefault();
                        previewContainer.remove();
                    };
                    previewContainer.appendChild(removeBtn);

                    // Add to uploaded images container
                    uploadedImagesContainer.appendChild(previewContainer);
                }
            }
        });
    }

    // Prevent default drag behaviors on document
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
});
