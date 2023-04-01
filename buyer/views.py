from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required 
from rest_framework.decorators import api_view
from . models import *
from . serializers import *
from users.models import *
from users.serializers import *
# Create your views here.


@api_view(["POST"])
def PaymentCreateView(request):

    if request.method == "POST":
        serializer = PaymentSerializer(data=request.data)
            
    if serializer.is_valid():
                
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def PaymentGetView(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data)


    
@api_view(['GET'])
def UserPaymentGetView(request,user):
    
    payments  = Payment.objects.filter(user=user)
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data)