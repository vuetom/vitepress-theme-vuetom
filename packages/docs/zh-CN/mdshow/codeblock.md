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

使用三个 ` 符号将代码包裹其中便是展示代码块

<br/>

**亮/暗主题切换**

根据文档主题模式切换

**代码块主题 macos**

可以在 language_key(语言标识) 后加入  `macos`

输入内容：

<div>
```java macos
</div>
String language = "Java";
<div>
```
</div>

展示效果：

```java macos
String language = "Java";
```

<br/>

**默认主题**

默认主题是以暗色系为主的

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
  
- javascript ( js macos )

```js macos
function fun(){
 echo "Hello, World!";
}
fun();
```

- Java ( java )

```java
System.out.print(1);
```

- Python ( py macos )

```py macos
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
