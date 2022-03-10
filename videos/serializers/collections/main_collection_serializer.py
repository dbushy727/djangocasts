from rest_framework import serializers

from videos.models import Collection
from videos.serializers.videos.lite_video_serializer import LiteVideoSerializer


class MainCollecitonSerializer(serializers.ModelSerializer):
    videos = LiteVideoSerializer(many=True, read_only=True)

    class Meta:
        model = Collection
        fields = ['id', 'title', 'slug', 'videos']
