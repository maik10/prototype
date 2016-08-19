<html>
  <head>
    <title>Prototype</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <link rel="stylesheet" href="{!! asset('node_modules/bootstrap/dist/css/bootstrap.min.css') !!}">
    <link rel="stylesheet" href="{!! asset('node_modules/font-awesome/css/font-awesome.min.css') !!}">
    <link rel="stylesheet" href="{!! asset('node_modules/dragula/dist/dragula.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="{{ asset('node_modules/core-js/client/shim.min.js') }}"></script>
    <script src="{{ asset('node_modules/zone.js/dist/zone.js') }}"></script>
    <script src="{{ asset('node_modules/reflect-metadata/Reflect.js') }}"></script>
    <script src="{{ asset('node_modules/systemjs/dist/system.src.js') }}"></script>
    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
     <div class="container-fluid">
        @yield('content')
     </div>
     <script src="{{ asset('node_modules/jquery/dist/jquery.min.js') }}"></script>
     <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js') }}"></script>
  </body>
</html>
