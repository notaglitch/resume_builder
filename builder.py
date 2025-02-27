from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

resume_data = {
    "name": input("Enter your full name: "),
    "email": input("Enter your email: "),
    "phone": input("Enter your phone number: "),
    "summary": input("Enter your summary: "),
    "skills": input("Enter your skills(separated by commas): ").split(","),
    "experience": []
}

while True:
    choice = input("Do you want to add professional experience? (y/n): ").lower()
    if choice != 'y':
        break
    
    experience = {
        "company": input("Enter company name: "),
        "role": input("Enter role/position: "),
        "years": input("Enter years (e.g. 2019-2021): ")
    }
    resume_data["experience"].append(experience)

resume_data["education"] = {
    "school": input("Enter school name: "),
    "degree": input("Enter degree/certification: "),
    "years": input("Enter years (e.g. 2015-2019): ")
}

env = Environment(loader=FileSystemLoader("."))
template = env.get_template("template.html")

html_out = template.render(resume_data)

output_pdf = f"{resume_data['name']}_resume.pdf"
HTML(string=html_out).write_pdf(output_pdf)

print(f"Resume generated successfully: {output_pdf}")
