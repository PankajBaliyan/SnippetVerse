
export default {
  id: 'css-flexbox-center',
  title: 'Flexbox Perfect Center',
  language: 'css',
  category: 'layouts',
  description: 'CSS snippet to perfectly center content both horizontally and vertically using flexbox.',
  shortDescription: 'Perfect center alignment with flexbox',
  code: `.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
}

/* Alternative with flex shorthand */
.flex-center-alt {
  display: flex;
  place-items: center;
  min-height: 100vh;
}

/* For centering text content */
.text-center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}`,
  tags: ['css', 'flexbox', 'center', 'layout', 'alignment'],
  usage: 'Apply these classes to containers that need perfect centering of their content.',
  contributedBy: 'CSS Community'
};
