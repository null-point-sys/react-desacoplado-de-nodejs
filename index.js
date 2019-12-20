<html>
  <head>
    <title>Navigation tab title</title>
    <meta charset="UTF-8" />
    <style>
      .letra-color-azul { color: blue; }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="https://unpkg.com/react@16.6.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script type="text/babel">
      const app       = document.getElementById('app');
      const texto     = 'texto';
      const elemento  = (<div>                                              // Esta es la declaración del elemento principal de nuestra aplicación React
                            <div> Nombre: {texto}                   </div>  // En esta línea se puede ver cómo se pueden inyectar variables de javascript con template brackets
                            <div> Fecha:  {Date().toLocaleString()} </div>  // Acá se muestra cómo se pueden usar expresiones javascript dentro de JSX 
                         </div>);
      ReactDOM.render(elemento, app);
    </script>
  </body>
</html>
