
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
