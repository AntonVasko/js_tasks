fetch('myworks.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

function initialize(products){
  const main = document.querySelector('main');
  updateDisplay();
  function updateDisplay() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

      for (const product of products) {
        fetchBlob(product);
      }
    
  }

  function fetchBlob(product) {
    const url = `images/${product.image}`;
    fetch(url)
      .then( response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.blob();
      })
      .then( blob => showProduct(blob, product) )
      .catch( err => console.error(`Fetch problem: ${err.message}`) );
  }

  function showProduct(blob, product) {
    const objectURL = URL.createObjectURL(blob);
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const image = document.createElement('img');

    section.setAttribute('class', product.type);

    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

    image.src = objectURL;
    image.alt = product.name;

    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(image);
  }
}