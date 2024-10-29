from django.contrib import admin
from django.urls import path, include
from main.views import DadosPessoaisViewSet, ContatoViewSet, ExpProfissionalViewSet, ExpAcademicaViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register(r'dadospessoais', DadosPessoaisViewSet)
router.register(r'contato', ContatoViewSet)
router.register(r'expProfissional', ExpProfissionalViewSet)
router.register(r'expAcademica', ExpAcademicaViewSet)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]