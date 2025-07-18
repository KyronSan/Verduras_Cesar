const categorias = {
  verduras: {
    titulo: "Verduras crudas y cocidas",
    imagen: "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
    descripcion: [
      "Lechuga: Rica en fibra y agua, ideal para ensaladas frescas.",
      "Espinaca: Fuente de hierro y antioxidantes, cruda o cocida.",
      "Brócoli: Alto en vitamina C y K, excelente al vapor.",
      "Pepino: Hidrata y aporta frescura, perfecto para snacks.",
      "Zanahoria: Rica en betacarotenos, crujiente cruda o cocida.",
      "Coles: Incluye coliflor y repollo, versátiles en guisos.",
      "Berenjena: Ideal asada o al horno, baja en calorías.",
      "Calabaza: Dulce y nutritiva, perfecta en sopas o asada."
    ]
  },
  frutas: {
    titulo: "Frutas",
    imagen: "https://media.istockphoto.com/id/467652436/photo/fresh-mixed-fruits.jpg?s=612x612&w=0&k=20&c=sikWvsKC3oigZoxA44zaVCq2xSQb419bCP9J0q1eKBs=",
    descripcion: [
      "Manzana: Fuente de fibra y vitamina C, ideal como snack.",
      "Pera: Dulce y jugosa, buena para la digestión.",
      "Kiwi: Alto en vitamina C y antioxidantes, refrescante.",
      "Guayaba: Rica en vitamina A y C, ideal para jugos.",
      "Uvas: Pequeñas y dulces, perfectas para un postre natural.",
      "Papaya: Ayuda a la digestión con su enzima papaína."
    ]
  },
  cereales: {
    titulo: "Cereales, Legumbres y Tubérculos",
    imagen: "https://media.istockphoto.com/id/1479452991/photo/various-nuts-on-the-market.jpg?s=612x612&w=0&k=20&c=nmG-3BMIPzwtpxu9SHj6W8PQWGitBaFO3_SkY9-CdIg=",
    descripcion: [
      "Lentejas: Altas en proteína y fibra, ideales para guisos.",
      "Frijoles: Fuente de hierro y proteínas, versátiles en platos.",
      "Arroz integral: Rico en fibra, mejor que el arroz blanco.",
      "Avena: Perfecta para desayunos, ayuda a controlar el colesterol.",
      "Papas: Fuente de energía, mejor al horno o hervidas."
    ]
  },
  aderezos: {
    titulo: "Aderezos y acompañantes",
    imagen: "https://img.freepik.com/premium-photo/picture-bottle-olive-oil-spices_1013369-51944.jpg",
    descripcion: [
      "Aguacate (crudo): Grasas saludables, ideal para untar o ensaladas.",
      "Aceite de oliva: Rico en antioxidantes, perfecto para cocinar o aderezar.",
      "Chile natural: Añade sabor picante, contiene capsaicina beneficiosa."
    ]
  }
};

const planes = {
  verduras: [
    "Desayuno: Avena con manzana.",
    "Almuerzo: Brócoli y arroz integral.",
    "Cena: Ensalada de espinaca y pepino."
  ],
  frutas: [
    "Desayuno: Smoothie de papaya con avena.",
    "Almuerzo: Fruta como postre.",
    "Cena: Pera o manzana como snack nocturno."
  ],
  cereales: [
    "Desayuno: Avena cocida con frutas.",
    "Almuerzo: Lentejas con arroz integral.",
    "Cena: Pan integral con palta."
  ],
  aderezos: [
    "Desayuno: Tostadas con aguacate.",
    "Almuerzo: Ensalada con aceite de oliva.",
    "Cena: Sopa con toque de chile natural."
  ]
};

const consejos = {
  verduras: [
    "Evita cocer demasiado para conservar nutrientes.",
    "Combina verduras de varios colores.",
    "Lávalas bien antes de consumirlas."
  ],
  frutas: [
    "Consume frutas con cáscara si es posible.",
    "Evita azúcares añadidos en jugos.",
    "Elige frutas de temporada."
  ],
  cereales: [
    "Prefiere cereales integrales.",
    "Evita harinas refinadas.",
    "Combina cereales con legumbres para proteína completa."
  ],
  aderezos: [
    "Usa aderezos naturales y evita los procesados.",
    "El aguacate es un buen reemplazo de la mayonesa.",
    "Controla la cantidad de aceite aunque sea saludable."
  ]
};

const buttons = document.querySelectorAll('nav button');
const contenedorCategoria = document.getElementById('contenido-categoria');
const plan = document.getElementById('plan');
const recomendaciones = document.getElementById('recomendaciones');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    const cat = categorias[target];

    contenedorCategoria.innerHTML = `
      <section class="categoria visible">
        <h3>${cat.titulo}</h3>
        <img src="${cat.imagen}" alt="${cat.titulo}" />
        <ul>${cat.descripcion.map(item => `<li>${item}</li>`).join('')}</ul>
      </section>
    `;

    plan.innerHTML = planes[target].map(item => `<li>${item}</li>`).join('');
    recomendaciones.innerHTML = consejos[target].map(item => `<li>${item}</li>`).join('');
  });
});

// Mostrar por defecto la categoría "verduras" al cargar la página
document.querySelector('nav button[data-tab="verduras"]').click();
