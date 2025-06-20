
export default {
  id: 'css-fade-in-animation',
  title: 'Fade In Animation',
  language: 'css',
  category: 'animations',
  description: 'Smooth fade-in animation effect using CSS keyframes and transitions.',
  shortDescription: 'Smooth fade-in animation effect',
  code: `/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Fade in with delay variations */
.fade-in-delay-1 {
  animation: fadeIn 0.6s ease-out 0.1s both;
}

.fade-in-delay-2 {
  animation: fadeIn 0.6s ease-out 0.2s both;
}

.fade-in-delay-3 {
  animation: fadeIn 0.6s ease-out 0.3s both;
}

/* Utility class for elements that should fade in on scroll */
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}`,
  tags: ['css', 'animation', 'fade', 'keyframes', 'transitions'],
  usage: 'Add these classes to elements that need fade-in animations on page load or scroll.',
  contributedBy: 'Animation Experts'
};
