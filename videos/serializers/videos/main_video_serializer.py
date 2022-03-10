from rest_framework import serializers

from videos.models import Video
from videos.serializers.collections.lite_collection_serializer import LiteCollectionSerializer


class MainVideoSerializer(serializers.ModelSerializer):
    collections = LiteCollectionSerializer(many=True, read_only=True)

    class Meta:
        model = Video
        fields = ['id', 'title', 'slug', 'collections']
