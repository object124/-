#class human:
#    def cry(self):
#        print("응애응애")

#human().cry()

#class human():
#    def __init__(self,name):
#        self.name = name

#human = ("KJH")
#print(human)


#class Human():
#    def __init__(self,name,age,sex):
#        self.name= name
#        self.age= age
#        self.sex= sex
#areum = Human ("아름", 25, "여자")
#print (areum.age)


#class Stock():
#    def __init__(self,name,code):
#            self.name= name
#            self.code= code

#    def set_name(self,name):
#            self.name= name
    
#    def set_code(self,code):
#            self.code= code

#    def get_name(self):
#        return self.name

#    def get_code(self):   
#        return self.code

#삼성 = Stock("삼성전자","005930")

#print(삼성.name)
#print(삼성.code)
#print(삼성.get_name())
#print(삼성.get_code())



#class Stock():
#        def __init__(self, name, code, PER, PBR, 배당수익률):
#                self.self = self
#                self.name = name
#                self.code = code
#                self.PER = PER
#                self.PBR = PBR
#                self.배당수익률 = 배당수익률

#        def set_name(self,name):
#                self.name = name
        
#        def set_code(self,code):
#                self.code = code
        
#        def get_name(self):
#                return self.name
        
#        def get_code(self):
#                return self.code

#삼성 = Stock("삼성", "005930", 15.79, 1.33, 2.83)
#print(삼성.name)
#print(삼성.code)
#print(삼성.배당수익률)



class Stock():
        def __init__(self, name, code, PER, PBR, dividend):
                self.self = self
                self.name = name
                self.code = code
                self.PER = PER
                self.PBR = PBR
                self.dividend = dividend

        def set_name(self,name):
                self.name = name
        
        def set_code(self,code):
                self.code = code
        
        def set_PER(self,PER):
                self.PER = PER

        def set_PBR(self,PBR):
                self.PBR = PBR

        def set_dividend(self,dividend):
                self.dividend = dividend

        def get_name(self):
                return self.name
        
        def get_code(self):
                return self.code

삼성 = Stock("삼성", "005930", 15.79, 1.33, 2.83)
print(삼성.name)
print(삼성.code)
print(삼성.dividend)




