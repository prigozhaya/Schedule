GET_GROUP_QUERY = f"""
    SELECT Name, IdGroup
    FROM Groups
    WHERE IdF = {{0}} AND Year > YEAR(GETDATE())-5 AND Name != 'арх' AND Name != 'а/о' AND IdFormaTime = {{1}}
    ORDER BY Name 
"""

EXTRACT_DATA_QUERY = f"""
    SELECT IdSchedule, DateIn, DateOut, sch.ScheduleDaysOptionV.Name2 as "Day",sch.ScheduleV.IdScheduleDaysOption as "DayNumber", sch.ScheduleV.IdScheduleTimeOption as "Lesson", sch.SubjectTime.TimeIn, sch.SubjectTime.TimeOut, dbo.Lesson.ShortName  as "Discipline",  dbo.ScPlanLessonType_V.ShortName  as "Discipline_Type", sch.LectureHallV.Number as "Сlassroom", Groups.Name as "Group", sch.ScheduleV.IdGroup,  Groups.IdF as Faculty, (NamePost + ' ' + NameF + ' ' + LEFT(NameI, 1)+'.' + LEFT(NameO, 1)+'.') AS FIO_teacher
    FROM sch.ScheduleV
    JOIN dbo.e_Teacher ON sch.ScheduleV.IdTeacher = dbo.e_Teacher.IdTeacher
    JOIN Groups ON sch.ScheduleV.IdGroup = Groups.IdGroup
    JOIN ScPlan ON sch.ScheduleV.IdPlan = ScPlan.IdPlan and sch.ScheduleV.IdScPlan = ScPlan.IdScPlan
    JOIN dbo.Lesson ON ScPlan.IdLesson = dbo.Lesson.IdLesson
    JOIN ScPlanLessonType_V ON sch.ScheduleV.IdScPlanLessonType = dbo.ScPlanLessonType_V.IdScPlanLessonType
    JOIN sch.LectureHallV ON sch.ScheduleV.IdLectureHall = sch.LectureHallV.IdLectureHall
    JOIN sch.ScheduleDaysOptionV ON sch.ScheduleV.IdScheduleDaysOption = sch.ScheduleDaysOptionV.IdScheduleDaysOption
    JOIN sch.SubjectTime ON sch.ScheduleV.IdScheduleTimeOption = sch.SubjectTime.IdScheduleTimeOption
    WHERE DateIn <= '{{0}}' AND DateOut >= '{{1}}' AND Groups.IdGroup = {{2}}
    ORDER BY sch.ScheduleV.IdScheduleDaysOption, Lesson 
"""

GET_TEACHERS_NAME_QUERY = f"""
    SELECT DISTINCT (NamePost + ' ' + NameF + ' ' + NameI + ' ' + NameO) AS FIO_teacher, dbo.e_Teacher.IdTeacher 
    FROM sch.ScheduleV
    JOIN dbo.e_Teacher ON sch.ScheduleV.IdTeacher = dbo.e_Teacher.IdTeacher
    WHERE (NamePost + ' ' + NameF + ' ' + NameI + ' ' + NameO) IS NOT NULL
    ORDER BY (NamePost + ' ' + NameF + ' ' + NameI + ' ' + NameO)
"""

EXTRACT_DATA_FOR_TEACHERS_QUERY = f"""
    SELECT sch.ScheduleDaysOptionV.Name2 as "Day", sch.ScheduleV.IdScheduleDaysOption as "DayNumber", dbo.Lesson.ShortName  as "Discipline", sch.ScheduleV.IdScheduleTimeOption as "Lesson", sch.SubjectTime.TimeIn, sch.SubjectTime.TimeOut, dbo.ScPlanLessonType_V.ShortName  as "Discipline_Type", sch.LectureHallV.Number as "Сlassroom", Groups.Name as "Group", sch.ScheduleV.IdGroup,  Groups.IdF as Faculty, DateIn, DateOut, IdSchedule
    FROM sch.ScheduleV
    JOIN dbo.e_Teacher ON sch.ScheduleV.IdTeacher = dbo.e_Teacher.IdTeacher
    JOIN Groups ON sch.ScheduleV.IdGroup = Groups.IdGroup
    JOIN ScPlan ON sch.ScheduleV.IdPlan = ScPlan.IdPlan and sch.ScheduleV.IdScPlan = ScPlan.IdScPlan
    JOIN dbo.Lesson ON ScPlan.IdLesson = dbo.Lesson.IdLesson
    JOIN ScPlanLessonType_V ON sch.ScheduleV.IdScPlanLessonType = dbo.ScPlanLessonType_V.IdScPlanLessonType
    JOIN sch.LectureHallV ON sch.ScheduleV.IdLectureHall = sch.LectureHallV.IdLectureHall
    JOIN sch.ScheduleDaysOptionV ON sch.ScheduleV.IdScheduleDaysOption = sch.ScheduleDaysOptionV.IdScheduleDaysOption
    JOIN sch.SubjectTime ON sch.ScheduleV.IdScheduleTimeOption = sch.SubjectTime.IdScheduleTimeOption
    WHERE DateIn <= '{{0}}' AND DateOut >= '{{1}}' AND IdTeacher = '{{2}}'
    GROUP BY IdTeacher, sch.ScheduleDaysOptionV.Name2, sch.ScheduleV.IdScheduleDaysOption, IdSchedule, DateIn, DateOut, sch.ScheduleV.IdScheduleTimeOption, sch.SubjectTime.TimeIn, sch.SubjectTime.TimeOut, dbo.Lesson.ShortName, dbo.ScPlanLessonType_V.ShortName, sch.LectureHallV.Number, Groups.Name, sch.ScheduleV.IdGroup, Groups.IdF
    ORDER BY IdTeacher, DayNumber, Lesson 
"""