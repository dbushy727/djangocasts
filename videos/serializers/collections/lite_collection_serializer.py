from rest_framework import serializers

from videos.models import Collection


class LiteCollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        fields = ['id', 'title', 'slug']
