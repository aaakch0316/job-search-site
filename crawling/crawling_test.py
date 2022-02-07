'''
TOP 100
인터넷전체 : BizJobtype_Bctgr_Code=10016
QA/테스터 검증 : 1000095
DBA/데이터베이스 96
네트워크/서버/보안 97
웹프로그래머 100
응용프로그래머 101
HTML/퍼블리싱/UI개발 104
웹디자인 105
ERP/시스템분석설계 106
빅데이터/AI(인공지능)109
+ 연봉검색 순위
+ 인기검색어

검색로직
'''

import requests
from bs4 import BeautifulSoup
URL = "https://www.jobkorea.co.kr/Top100/?Main_Career_Type=1&Search_Type=1&BizJobtype_Bctgr_Code=10016&BizJobtype_Bctgr_Name=IT·인터넷&BizJobtype_Code=1000097"
# URL = "https://www.jobkorea.co.kr/Top100/"
# URL = "https://www.jobkorea.co.kr/Search/?stext=python"
# URL = "https://www.jobkorea.co.kr/"
result = requests.get(URL)
indeed_soup = BeautifulSoup(result.text, "html.parser")
print(indeed_soup)
# pagination = indeed_soup.find("ul", {"class": "clear"})
# links = indeed_soup.find_all('li', {"class": "list-post"})
# # print(links)
# for i in links:
#     print()
#     print()
#     print()
#     print()
#     # print(i)
#     print(i.find("a", {"class": "title"}).get_text().strip())