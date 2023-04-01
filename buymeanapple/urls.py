from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from buyer import views
from django.conf import settings  
from django.conf.urls.static import static  

urlpatterns = [
    path('admin/', admin.site.urls),
    path((''), include('users.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('support/payment-create/', views.PaymentCreateView, name = "buy-link"),
    path('support/payment-list/', views.PaymentGetView, name = "payment-list"),

    path('support/user-payment-list/<str:user>', views.UserPaymentGetView, name = "user-payment-list"),
    
]

