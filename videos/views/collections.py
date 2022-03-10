from rest_framework import permissions, viewsets
from rest_framework.response import Response
from videos.serializers.collections.lite_collection_serializer import LiteCollectionSerializer
from videos.serializers.collections.main_collection_serializer import MainCollecitonSerializer
from videos.models import Collection


class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = MainCollecitonSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        queryset = Collection.objects.all()
        serializer = LiteCollectionSerializer(queryset, many=True)
        return Response(serializer.data)
