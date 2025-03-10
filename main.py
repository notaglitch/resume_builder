from mailmerge import MailMerge

def generate_docx(data):
    template = "resume_template.docx"
    doc = MailMerge(template)

    doc.merge(
        Name=data["name"],
        JobTitle=data["job_title"],
        Email=data["email"],
        Experience1=data["experience"][0] if len(data["experience"]) > 0 else "",
        Experience2=data["experience"][1] if len(data["experience"]) > 1 else "",
    )

    output_filename = "generated_resume.docx"
    doc.write(output_filename)
    return output_filename
