from django.contrib import admin
from videos.models.collection import Collection
from videos.models.video import Video

# Register your models here.
admin.site.register(Collection)
admin.site.register(Video)