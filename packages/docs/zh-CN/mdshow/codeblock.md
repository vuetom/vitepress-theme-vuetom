---
title: 代码块展示
head:
  - - meta
    - name: description
      content: 代码块展示
  - - meta
    - name: keywords
      content: code
---

# {{ $frontmatter.title }}


## MD语法展示

使用三个 ` 符号将代码包裹其中

<br/>

**亮色主题**

可以在 language_key(语言标识) 后加入  `light` 

输入内容：

<div>
```java light
</div>
String language = "Java";
<div>
```
</div>

输出内容：

```java light
String language = "Java";
```

<br/>

**暗色主题**

默认的话就是暗色系

输入内容：

<div>
```js
</div>
String language = "JS";
<div>
```
</div>

输出内容：

```java
String language = "JS";
```

<br/>

**示例展示**
  
- javascript ( js )

```js 
function fun(){
	echo "Hello, World!";
}
fun();
```

- Java ( java )
```java
System.out.print(1);
```
- Python ( py )

```py
#!/usr/bin/env python3
print("Hello, World!");
```

- SQL ( sql )
```sql
select user_name from user_info
```

- Shell ( bash, shell )
```bash
echo '1'
```
