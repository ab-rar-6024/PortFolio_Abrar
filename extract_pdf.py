import PyPDF2
with open('public/resume.pdf', 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = '\n'.join(page.extract_text() for page in reader.pages)
with open('resume.txt', 'w', encoding='utf-8') as f:
    f.write(text)
