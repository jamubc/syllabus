# Social Preview Image Generator

## Requirements
```bash
pip install Pillow
```

## Python Script

```python
from PIL import Image, ImageDraw, ImageFont
import os

# Create image with recommended dimensions
width, height = 1280, 640
bg_color = '#1a365d'  # Dark blue
accent_color = '#4299e1'  # Light blue
text_color = '#ffffff'  # White

# Create image
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Try to use a system font, fallback to default
try:
    title_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 72)
    subtitle_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 36)
    url_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default() 
    url_font = ImageFont.load_default()

# Add gradient background effect
for y in range(height):
    alpha = y / height
    r = int(26 + (66 - 26) * alpha)
    g = int(54 + (153 - 54) * alpha)
    b = int(93 + (225 - 93) * alpha)
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Draw title
title = 'Syllabus Website'
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
title_y = height // 2 - 80
draw.text((title_x, title_y), title, fill=text_color, font=title_font)

# Draw subtitle
subtitle = 'Educational Platform & Tools'
subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2
subtitle_y = title_y + 90
draw.text((subtitle_x, subtitle_y), subtitle, fill=accent_color, font=subtitle_font)

# Draw GitHub URL
url = 'github.com/jamubc/syllabus'
url_bbox = draw.textbbox((0, 0), url, font=url_font)
url_width = url_bbox[2] - url_bbox[0]
url_x = (width - url_width) // 2
url_y = subtitle_y + 60
draw.text((url_x, url_y), url, fill='#cbd5e0', font=url_font)

# Add decorative elements
for i in range(20):
    x = 50 + i * 60
    y = 50
    draw.circle((x, y), 3, fill=accent_color)
    
for i in range(20):
    x = 50 + i * 60
    y = height - 50
    draw.circle((x, y), 3, fill=accent_color)

# Save image
img.save('social-preview.png', 'PNG', quality=95)
print('Social preview image created: social-preview.png')
```

## Usage
1. Run the script: `python gen_image.py`
2. Upload the generated `social-preview.png` to your GitHub repository settings
3. Go to your repository → Settings → Social preview → Upload image