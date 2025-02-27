from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

resume_data = {
    "name": input("Enter your full name: "),
    "email": input("Enter your email: "),
    "phone": input("Enter your phone number: "),
    "summary": input("Enter your summary: "),
    "skills": input("Enter your skills(separated by commas): ").split(","),
    "experience": [],
    "education": []
}

photo_url = input("Enter the URL to your profile photo (optional, press Enter to skip): ").strip()
if photo_url:
    resume_data["photo_url"] = photo_url

linkedin = input("Enter your LinkedIn profile URL (optional, press Enter to skip): ").strip()
if linkedin:
    resume_data["linkedin"] = linkedin

location = input("Enter your location (optional, press Enter to skip): ").strip()
if location:
    resume_data["location"] = location

print("\nAdd your professional experience:")
print("(Press Enter without input to finish adding experiences)")

while True:
    company = input("\nEnter company name (or press Enter to finish): ").strip()
    if not company:
        break
        
    experience = {
        "company": company,
        "role": input("Enter role/position: "),
        "years": input("Enter years (e.g. 2019-2021): ")
    }
    resume_data["experience"].append(experience)
    print("Experience added successfully!")

print("\nAdd your education:")
print("(Press Enter without input to finish adding education)")

while True:
    school = input("\nEnter school name (or press Enter to finish): ").strip()
    if not school:
        break
        
    education = {
        "school": school,
        "degree": input("Enter degree/certification: "),
        "years": input("Enter years (e.g. 2015-2019): ")
    }
    resume_data["education"].append(education)
    print("Education added successfully!")

env = Environment(loader=FileSystemLoader("."))
template = env.get_template("template.html")

html_out = template.render(resume_data)

output_pdf = f"{resume_data['name']}_resume.pdf"
HTML(string=html_out).write_pdf(output_pdf)

print(f"\nResume generated successfully: {output_pdf}")
