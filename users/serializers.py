from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from dj_rest_auth.serializers import UserDetailsSerializer
from dj_rest_auth.serializers import PasswordResetSerializer
from django.conf import settings
from . models import *
from dj_rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    phone_number = serializers.CharField(max_length=100)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['phone_number'] = self.validated_data.get('phone_number', '')
        
        return data_dict


class CustomUserDetailsSerializer(UserDetailsSerializer):

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + \
            ('phone_number','email', 'username')



class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields = '__all__'


class WithdrawalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdrawal
        fields = '__all__'
