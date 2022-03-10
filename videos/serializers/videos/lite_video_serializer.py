from rest_framework import serializers

from videos.models import Video


class LiteVideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = ['id', 'title', 'slug']
