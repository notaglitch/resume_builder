import subprocess

def convert_to_pdf(docx_filename):
    pdf_filename = docx_filename.replace(".docx", ".pdf")
    subprocess.run(["unoconv", "-f", "pdf", docx_filename])
    return pdf_filename
