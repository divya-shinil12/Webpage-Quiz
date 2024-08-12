from bs4 import BeautifulSoup

# Read the HTML file
with open('index.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content
soup = BeautifulSoup(html_content, 'lxml')

# Convert all tags to lowercase
for tag in soup.find_all(True):
    tag.name = tag.name.lower()

# Write the modified HTML back to a file
with open('index_lowercase.html', 'w', encoding='utf-8') as file:
    file.write(str(soup.prettify()))