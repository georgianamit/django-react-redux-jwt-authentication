from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions, status


# @api_view(['GET'])
# def get_current_user(request):
#     serializer = UserSerializer(request.user)
#     return Response(serializer.data)

class UserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
