# Run the app

I used the latest version of angular cli at the time - 7.3.9

  - 1 Run npm i
  - 2 Run ng serve
  - use Moesif CORS chrome plugin in case of cors issues

# Description 

  - A real estate website demo to display available apartments

# App structure

  - Modules:
    - App - main module
    - Shared - imports and exports all the reusable components
    - Dashboard - module that uses the shared module, angular's built-in modules and also declares it's child componens
    - DashboardRoutingModule - handles applications routing
    - Core - holds all the services in one place
  - Components
    - App - main component
    - Dashboard - wraps router-outlet tag (a placeholder for app's routing) and uses loader component to show spinner when data is loaded
    - LoaderComponent - subscribes to the loader service and recieves a boolean value to know when to show or hide the loader
    - ApartmentList - lists available apartments list with city and neighborhood filters
    - ApartmentListItem - displays a specific list item with it's image and metadata
    - ApartmentDetails - a detailed view for a specific apartment
    - ItemFavorite - a star toggle to rate the item
  - Pipes
    -  Filter - a filter pipe to filter the provided list of objects with nested properties
  - Services
    -  Http - http service to handle api calls
    -  Data - service that uses Http service and handles api calls specific for apartments
    -  ApartmentDetailsResolver - used to resolve the route only after the getApartment call responses
    -  LoaderService / LoaderInterceptor - intercepting http requests/responses to notify the LoaderComponent when to show or hide the loader
  - Styles - App uses some global styles in styles.scss an also has a shared _apartment-list-item.scss and _colors.scss files

# Points for improvement
  - Types - because of the lack of time, not all the app is covered with types.
