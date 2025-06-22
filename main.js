// Main JavaScript for Deep Dimensions 3D Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('fade-out');
    }, 2000);

    // Initialize Three.js scene for hero section
    initHeroAnimation();
    
    // Initialize Three.js scene for about section
    initAboutAnimation();
    
    // Initialize particles background
    initParticles();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Header scroll effect
    initHeaderScroll();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Scroll to top button
    initScrollToTop();
});

// Initialize Three.js scene for hero section
function initHeroAnimation() {
    const container = document.getElementById('hero-3d');
    if (!container) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create a glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x3a10e5,
        wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);
    
    // Create particles around the sphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);
    
    // Create a glowing ring
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    
    // Create a second ring
    const ring2Geometry = new THREE.TorusGeometry(1.8, 0.03, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
        color: 0x3a10e5,
        transparent: true,
        opacity: 0.6
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);
    
    // Create a third ring
    const ring3Geometry = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ring3Material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4
    });
    const ring3 = new THREE.Mesh(ring3Geometry, ring3Material);
    ring3.rotation.x = Math.PI / 6;
    ring3.rotation.z = Math.PI / 4;
    group.add(ring3);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add point light
    const pointLight = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the group
        group.rotation.y += 0.005;
        group.rotation.z += 0.002;
        
        // Rotate the rings
        ring.rotation.z += 0.01;
        ring2.rotation.z -= 0.008;
        ring3.rotation.z += 0.006;
        
        // Pulse the sphere
        const time = Date.now() * 0.001;
        sphere.scale.x = 1 + Math.sin(time) * 0.1;
        sphere.scale.y = 1 + Math.sin(time) * 0.1;
        sphere.scale.z = 1 + Math.sin(time) * 0.1;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Initialize Three.js scene for about section
function initAboutAnimation() {
    const container = document.getElementById('about-3d');
    if (!container) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create a DNA-like double helix structure
    const helixGroup = new THREE.Group();
    group.add(helixGroup);
    
    // Parameters for the helix
    const helixRadius = 1.2;
    const helixHeight = 4;
    const helixTurns = 3;
    const helixPoints = 40;
    const sphereSize = 0.08;
    
    // Create the first strand
    for (let i = 0; i < helixPoints; i++) {
        const t = i / helixPoints;
        const angle = t * Math.PI * 2 * helixTurns;
        const y = (t - 0.5) * helixHeight;
        
        const x = Math.cos(angle) * helixRadius;
        const z = Math.sin(angle) * helixRadius;
        
        const sphereGeometry = new THREE.SphereGeometry(sphereSize, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x3a10e5
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        helixGroup.add(sphere);
        
        // Add connecting lines if not the last point
        if (i < helixPoints - 1) {
            const nextT = (i + 1) / helixPoints;
            const nextAngle = nextT * Math.PI * 2 * helixTurns;
            const nextY = (nextT - 0.5) * helixHeight;
            
            const nextX = Math.cos(nextAngle) * helixRadius;
            const nextZ = Math.sin(nextAngle) * helixRadius;
            
            const points = [];
            points.push(new THREE.Vector3(x, y, z));
            points.push(new THREE.Vector3(nextX, nextY, nextZ));
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x3a10e5,
                transparent: true,
                opacity: 0.7
            });
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            helixGroup.add(line);
        }
    }
    
    // Create the second strand
    for (let i = 0; i < helixPoints; i++) {
        const t = i / helixPoints;
        const angle = t * Math.PI * 2 * helixTurns + Math.PI; // Offset by 180 degrees
        const y = (t - 0.5) * helixHeight;
        
        const x = Math.cos(angle) * helixRadius;
        const z = Math.sin(angle) * helixRadius;
        
        const sphereGeometry = new THREE.SphereGeometry(sphereSize, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x00f0ff
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        helixGroup.add(sphere);
        
        // Add connecting lines if not the last point
        if (i < helixPoints - 1) {
            const nextT = (i + 1) / helixPoints;
            const nextAngle = nextT * Math.PI * 2 * helixTurns + Math.PI;
            const nextY = (nextT - 0.5) * helixHeight;
            
            const nextX = Math.cos(nextAngle) * helixRadius;
            const nextZ = Math.sin(nextAngle) * helixRadius;
            
            const points = [];
            points.push(new THREE.Vector3(x, y, z));
            points.push(new THREE.Vector3(nextX, nextY, nextZ));
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x00f0ff,
                transparent: true,
                opacity: 0.7
            });
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            helixGroup.add(line);
        }
    }
    
    // Add connecting lines between the strands
    for (let i = 0; i < helixPoints; i += 4) {
        const t = i / helixPoints;
        const angle1 = t * Math.PI * 2 * helixTurns;
        const angle2 = t * Math.PI * 2 * helixTurns + Math.PI;
        const y = (t - 0.5) * helixHeight;
        
        const x1 = Math.cos(angle1) * helixRadius;
        const z1 = Math.sin(angle1) * helixRadius;
        
        const x2 = Math.cos(angle2) * helixRadius;
        const z2 = Math.sin(angle2) * helixRadius;
        
        const points = [];
        points.push(new THREE.Vector3(x1, y, z1));
        points.push(new THREE.Vector3(x2, y, z2));
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.4
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        helixGroup.add(line);
    }
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add point light
    const pointLight = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the helix
        helixGroup.rotation.y += 0.01;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Initialize particles background
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00f0ff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3a10e5',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Initialize custom cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.classList.add('cursor-follower');
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        setTimeout(function() {
            follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }, 100);
    });
    
    // Add hover class to cursor when hovering over links and buttons
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load
}

// Initialize header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

// Initialize scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Service cards hover effect
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.classList.add('glow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('glow');
        });
    });
});

// Typed.js for hero section
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
                'AI Solutions',
                'Data Consulting',
                'Cybersecurity',
                'Software Development'
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true
        });
    }
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});
