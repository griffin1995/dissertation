"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin

# Import path and include functions for URL routing
from django.urls import path, include

# Import the CreateUserView from the api.views module, which handles user creation
from api.views import CreateUserView

# Import views from the SimpleJWT package to handle token creation and refresh
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


# Define the URL patterns for the application
urlpatterns = [
    # Admin site URL
    path("admin/", admin.site.urls),
    # URL pattern for user registration
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    # URL pattern for obtaining JWT token
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    # URL pattern for refreshing JWT token
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    # Include the default login and logout views for the Django REST framework
    path("api-auth/", include("rest_framework.urls")),
    # Include the URLs defined in the 'api' app's urls.py file under the "api/" path.
    # If the requested path doesn't match any of the specified patterns, Django will forward the request to these included URLs.
    path("api/", include("api.urls")),
]
