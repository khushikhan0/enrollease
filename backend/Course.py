class Course:
    def __init__(crn, course_name, pre_req, co_req, credit):
        self.crn = crn
        self.course_name = course_name
        self.pre_req = pre_req
        self.co_req = co_req
        self.credits = credit

    def __str__(self):
        return f"{self.crn} {self.course_name}"    


