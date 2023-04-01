from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required 
from rest_framework.decorators import api_view
from .serializers import *
from . models import *
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.


@api_view(['GET'])
def ProfileView(request):
    permission_classes = [IsAuthenticated]
   # user = request.user.pk
    profile = Profile.objects.filter(user=request.user)
    serializer = UserProfileSerializer(profile, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def UserPageView(request, slug):
    page = UserPage.objects.get(slug=slug)
    serializer = UserPageSerializer(page, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def UserPageListView(request):
    pages = UserPage.objects.filter(user=request.user)
    serializer = UserPageSerializer(pages, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def UserPageCreateView(request, user):

    page = UserPage.objects.filter(user=user).first()
    serializer = UserPageSerializer(instance=page, data=request.data, many=False, partial="True")
    

    if serializer.is_valid():
                
        serializer.save()

    return Response(serializer.data)



@api_view(['POST'])
def  WithdrawalView(request):
    if request.method == "POST":
        serializer = WithdrawalSerializer(data=request.data)
            
    if serializer.is_valid():
                
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def  WithdrawalListView(request):
    withdrawals = Withdrawal.objects.filter(user=request.user)
    serializer = WithdrawalSerializer(withdrawals, many=True)

    return Response(serializer.data)

    