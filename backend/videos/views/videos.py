from rest_framework import permissions, viewsets
from rest_framework.response import Response
from videos.serializers.videos.lite_video_serializer import LiteVideoSerializer
from videos.serializers.videos.main_video_serializer import MainVideoSerializer

from videos.models.video import Video


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = MainVideoSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'

    def list(self, request):
        queryset = Video.objects.all()
        serializer = LiteVideoSerializer(queryset, many=True)
        return Response(serializer.data)
