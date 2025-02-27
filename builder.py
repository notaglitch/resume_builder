from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

resume_data = {
    "name": input("Enter your full name: "),
    "email": input("Enter your email: "),
    "phone": input("Enter your phone number: "),
    "summary": input("Enter your summary: "),
    "skills": input("Enter your skills(seperated by commas): ").split(","),
    "experience": [
        choice = input("Do you have any experience? (y/n): ")
        if choice == "y":
            {"company": input("Enter your company: "), "role": input("Enter your role: "), "years": input("Enter your years: ")}
        else:
            []
    ],
    "education": {
        "school": input("Enter your school: "),
        "degree": input("Enter your degree: "),
        "years": input("Enter your years: ")
    }
}

env = Environment(loader=FileSystemLoader("."))
template = env.get_template("template.html")

html_out = template.render(resume_data)

output_pdf = f"{resume_data['name']}_resume.pdf"
HTML(string=html_out).write_pdf(output_pdf)

print(f"Resume generated successfully: {output_pdf}")
