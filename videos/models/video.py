from django.db import models

from videos.models.collection import Collection


class Video(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    collections = models.ManyToManyField(Collection, related_name='videos')

    def __str__(self):
        return self.title
