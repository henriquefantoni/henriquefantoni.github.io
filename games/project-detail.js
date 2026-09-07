document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const mainContent = document.getElementById('project-main-content');

    if (!projectId) {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-description').textContent = "No project ID provided in the URL.";
        if (mainContent) mainContent.style.display = 'none';
        document.getElementById('project-media-section').style.display = 'none';
        document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
        return;
    }

    try {
        const response = await fetch('./projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);

        if (project) {
            document.getElementById('pageTitle').textContent = `${project.title} | Lorddosgames`;
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-description').textContent = project.description;

            const playButton = document.getElementById('project-play-button');
            if (playButton) {
                if (project.playUrl) {
                    playButton.href = project.playUrl;
                    playButton.classList.remove('hidden');
                } else {
                    playButton.classList.add('hidden');
                }
            }

            if (mainContent) {
                mainContent.innerHTML = '';
                const mainImg = document.createElement('img');
                mainImg.id = 'project-main-image';
                mainImg.src = project.image;
                mainImg.alt = `${project.title} Main Image`;
                mainImg.className = 'w-full rounded-xl max-h-[600px] object-cover shadow-md mx-auto block';
                mainContent.appendChild(mainImg);
            }

            const mediaSection = document.getElementById('project-media-section');
            const mediaGrid = document.getElementById('project-media-grid');
            if (mediaGrid) mediaGrid.innerHTML = '';

            if (project.media && project.media.length > 0) {
                if (mediaSection) mediaSection.style.display = '';
                project.media.forEach(mediaItem => {
                    const mediaDiv = document.createElement('div');
                    mediaDiv.className = 'bg-surface rounded-xl p-4 border border-white/5 shadow-lg flex flex-col';

                    const mediaTitle = document.createElement('h3');
                    mediaTitle.className = 'text-sm font-semibold text-secondary mb-2.5 truncate';
                    mediaTitle.textContent = mediaItem.title;
                    mediaDiv.appendChild(mediaTitle);

                    if (mediaItem.type === 'video') {
                        const videoElement = document.createElement('video');
                        videoElement.src = mediaItem.src;
                        videoElement.controls = true;
                        videoElement.preload = "metadata";
                        videoElement.className = 'w-full rounded-lg aspect-video object-cover bg-black flex-1';
                        mediaDiv.appendChild(videoElement);
                    } else if (mediaItem.type === 'image') {
                        const imageElement = document.createElement('img');
                        imageElement.src = mediaItem.src;
                        imageElement.alt = mediaItem.title;
                        imageElement.className = 'w-full rounded-lg object-cover flex-1';
                        mediaDiv.appendChild(imageElement);
                    }
                    if (mediaGrid) mediaGrid.appendChild(mediaDiv);
                });
            } else if (mediaSection) {
                mediaSection.style.display = 'none';
            }

        } else {
            document.getElementById('project-title').textContent = "Project Not Found";
            document.getElementById('project-description').textContent = `The project with ID "${projectId}" could not be found.`;
            if (mainContent) mainContent.style.display = 'none';
            document.getElementById('project-media-section').style.display = 'none';
            document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
        }

    } catch (error) {
        console.error('Failed to load project details:', error);
        document.getElementById('project-title').textContent = "Error Loading Project";
        document.getElementById('project-description').textContent = "There was an error loading project details. Please try again later.";
        if (mainContent) mainContent.style.display = 'none';
        document.getElementById('project-media-section').style.display = 'none';
        document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
    }
});
