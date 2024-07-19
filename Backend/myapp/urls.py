from django.urls import path
from . import views

urlpatterns = [
    path('api/data/', views.send_json_data, name='send_json_data'),
    path('api/process/', views.process_post_request, name='process_post'),
]
