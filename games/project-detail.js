document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-description').textContent = "No project ID provided in the URL.";
        document.getElementById('project-main-image').style.display = 'none';
        document.getElementById('project-media-section').style.display = 'none';
        document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
        return;
    }

    try {
        const response = await fetch('./projects.json'); // Caminho para o seu JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);

        if (project) {
            document.getElementById('pageTitle').textContent = `${project.title} | Lorddosgames`;
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-description').textContent = project.description;
            document.getElementById('project-main-image').src = project.image;
            document.getElementById('project-main-image').alt = `${project.title} Main Image`;

            const mediaGrid = document.getElementById('project-media-grid');
            mediaGrid.innerHTML = ''; // Limpa qualquer conteúdo existente

            project.media.forEach(mediaItem => {
                const mediaDiv = document.createElement('div');
                mediaDiv.classList.add('video-item'); // Reutilizando a classe do CSS principal

                const mediaTitle = document.createElement('h3');
                mediaTitle.classList.add('video-title');
                mediaTitle.textContent = mediaItem.title;
                mediaDiv.appendChild(mediaTitle);

                if (mediaItem.type === 'video') {
                    const videoElement = document.createElement('video');
                    videoElement.src = mediaItem.src;
                    videoElement.controls = true;
                    videoElement.preload = "metadata";
                    mediaDiv.appendChild(videoElement);
                } else if (mediaItem.type === 'image') {
                    const imageElement = document.createElement('img');
                    imageElement.src = mediaItem.src;
                    imageElement.alt = mediaItem.title;
                    imageElement.style.width = '100%'; // Garante que a imagem preencha o container
                    imageElement.style.borderRadius = '8px';
                    mediaDiv.appendChild(imageElement);
                }
                mediaGrid.appendChild(mediaDiv);
            });


        } else {
            document.getElementById('project-title').textContent = "Project Not Found";
            document.getElementById('project-description').textContent = `The project with ID "${projectId}" could not be found.`;
            document.getElementById('project-main-image').style.display = 'none';
            document.getElementById('project-media-section').style.display = 'none';
            document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
        }

    } catch (error) {
        console.error('Failed to load project details:', error);
        document.getElementById('project-title').textContent = "Error Loading Project";
        document.getElementById('project-description').textContent = "There was an error loading project details. Please try again later.";
        document.getElementById('project-main-image').style.display = 'none';
        document.getElementById('project-media-section').style.display = 'none';
        document.getElementById('pageTitle').textContent = "Error | Lorddosgames";
    }
});