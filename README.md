# Admonition components

React components for admonitions

## Definition

```jsx
<Definition name="Definition name">

Definition text

</Definition>
```

This will generate a component that looks like this 

![Definition](https://res.cloudinary.com/samrobbins/image/upload/v1602436048/notes/definition_nisu7f.png)

## Corollary

I've never needed to add a title, so this just takes a child

```jsx
<Corollary>

Definition text

</Corollary>
```

Which looks like this:

![Corollary](https://res.cloudinary.com/samrobbins/image/upload/v1602436233/notes/corollary_hyzvmi.png)

## Example

The example component keeps the main text hidden until you toggle it. This keeps the amount of text on the page down, while allowing for more detail

```jsx
<Example title="Title">

Content

</Example>
```

Closed this looks like:

![Example Close](https://res.cloudinary.com/samrobbins/image/upload/v1602438447/notes/example_close_k1rocp.png)

Then on pressing the toggle it looks like:

![Example Open](https://res.cloudinary.com/samrobbins/image/upload/v1602438446/notes/example_open_wuspk2.png)

# Important

Important is for important notes, so doesn't take a title

```jsx
<Important>

An important note

</Important>
```

This looks like this:

![Important](https://res.cloudinary.com/samrobbins/image/upload/v1602438584/notes/important_zbljhl.png)

# Lemma

This doesn't have a title, but might need one at some point, raise an issue if it's required

Implemented like this

```jsx
<Lemma>

Lemma text

</Lemma>
```

![Lemma](https://res.cloudinary.com/samrobbins/image/upload/v1602438712/notes/lemma_q2lk8i.png)

# Problem

This is defined differently to the others, as all decision problems follow the same structure

```jsx
<Problem name="k-colourability" instance="A graph G" question="Is there a colouring of G using at most k colours?"/>
```

And looks like this:

![Problem](https://res.cloudinary.com/samrobbins/image/upload/v1602438851/notes/problem_wxobt3.png)

# Theorem

Theorem has the option of `name` for adding a title, and takes the main content as a child like so:

```jsx
<Theorem name="Theorem name">

Theorem content

</Theorem>
```

And looks like this:

![Theorem](https://res.cloudinary.com/samrobbins/image/upload/v1602439796/notes/theorem_qyxdiz.png)
