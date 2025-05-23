# Proyecto: Imbau
# Desarrollado por: Duwoh Developers
Descripción: Plataforma de ventas de productos y servicios para la construcción con 3 perfiles de usuario: comprador, vendedor y prestador de servicios. Incluye chat interno, administración, paneles personalizados, publicaciones, ofertas,etc.


Imbau/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── vercel.json
├── estructura.txt
├── public/

│   ├── UserFem.png
│   └── vite.svg
├── redux/

│   ├── actions.jsx
│   ├── reducer.jsx
│   └── store.jsx
├── utils/

│   └── categorias.js
├── src/

│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── utils/

│   │   └── ProductsArray.jsx
│   ├── assets/               # Imágenes, fuentes y logos
│   ├── Components/
│   │   ├── Admin/            # Paneles y gestión de administradores
│   │   ├── Chat/             # Chat interno
│   │   ├── Home/             # Vista de inicio, sliders, banners
│   │   ├── Layouts/          # Footer, Navbar, Vistas de producto y servicio
│   │   ├── Login/            # Login y autenticación
│   │   ├── Prestador/        # Panel del prestador de servicios
│   │   ├── Register/         # Formulario de registro
│   │   ├── Servicios/        # Crear y mostrar servicios
│   │   ├── Styles/           # CSS organizados por módulo
│   │   └── Vendedor/         # Panel y funciones del vendedor


# Funcionalidades principales:
🧑‍💼 Perfiles: Comprador, Vendedor, Prestador de servicios

💬 Chat interno por usuario

🛒 Publicación y venta de productos

🛠 Oferta y contratación de servicios

⚙️ Panel de administración completo (usuarios, promociones, categorías)

📦 Manejo de carrito y compras

🔐 Autenticación de usuarios

📱 Diseño responsivo con TailwindCSS

# Cómo levantar el proyecto en local

**1. Clonar el repositorio**
git clone Github Link
cd imbau

**2. Instalar dependencias**
npm install

**3. Levantar el proyecto**
npm run dev


| Comando           | Descripción                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo   |
| `npm run build`   | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |


