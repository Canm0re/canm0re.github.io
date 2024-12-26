import re
from bs4 import BeautifulSoup

def fix_html(html_content):
    """
    Fixes common HTML validation errors in the given HTML content.

    Args:
        html_content: The HTML content as a string.

    Returns:
        The fixed HTML content as a string.
    """

    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. Add Doctype declaration if missing
    if not soup.contents[0].name == "html":
        doctype = "<!DOCTYPE html>\n"
        html_content = doctype + html_content
        soup = BeautifulSoup(html_content, 'html.parser')  # Re-parse

    # 2. Fix unclosed tags
    # Close self-closing tags properly
    for tag in soup.find_all(['img', 'br', 'hr', 'input', 'link', 'meta', 'source']):
        if not tag.is_empty_element and str(tag).endswith("/>") == False:
            tag.is_empty_element = True

    # 3. Remove invalid `crossorigin` attributes
    for tag in soup.find_all(['link', 'script']):
        if tag.has_attr('crossorigin'):
            if tag.name == 'link' and tag.get('rel') != ['stylesheet']:  # Use .get() to avoid KeyError
                del tag['crossorigin']
            elif tag.has_attr('href') and not tag['href'].startswith('http'):
                del tag['crossorigin']
            elif tag.has_attr('src') and not tag['src'].startswith('http'):
                del tag['crossorigin']

    # 4. Remove invalid `url` attributes
    for tag in soup.find_all(True):
        if tag.has_attr('url'):
            del tag['url']

    # 5. Remove empty style attributes
    for tag in soup.find_all(True):
        if tag.has_attr('style') and tag['style'] == "":
            del tag['style']

    # Return the modified HTML
    return str(soup)

# Read HTML content from the file
try:
    with open('index.html', 'r') as f:
        html_code = f.read()
except FileNotFoundError:
    print("Error: index.html not found.")
    exit()

# Fix the HTML content
fixed_html = fix_html(html_code)

# Save the fixed HTML to a new file
with open('index_fixed.html', 'w') as f:
    f.write(fixed_html)

print("HTML validation issues fixed and saved to 'index_fixed.html'")